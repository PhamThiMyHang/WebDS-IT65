

function ClickLike(buttonElement) {
    const likeIcon = buttonElement.querySelector('[data-action="like-button"]');
    if (likeIcon) {
        likeIcon.classList.toggle('red');
        likeIcon.classList.toggle('white');
        console.log("Đã chuyển màu nút Like của bài viết:", buttonElement.closest('.recipe-card').querySelector('.dish-name').textContent);
    }
    
}
function ClickSave(buttonElement){
    const saveIcon = buttonElement.querySelector('[data-action="save-button"]');
   if (saveIcon) {
        saveIcon.classList.toggle('white');
        saveIcon.classList.toggle('orange');
        console.log("Đã chuyển màu nút Save của bài viết:", buttonElement.closest('.recipe-card').querySelector('.dish-name').textContent);
    }
}
/*js cho hình ảnh phóng to */
// Lấy các phần tử modal
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");

/**
 * Mở modal và hiển thị ảnh toàn màn hình.
 * @param {string} imgSrc - Đường dẫn của ảnh cần hiển thị.
 * @param {string} dishName - Tên món ăn của bài viết đang được click.
 */
function openFullscreenImage(imgSrc,dishName) {
  // Hiển thị modal
 modal.style.display = "block";
  // Thiết lập nguồn ảnh và chú thích
  modalImg.src = imgSrc;
  captionText.innerHTML = dishName;
}

/**
 * Đóng modal khi click vào nút X hoặc khu vực nền đen.
 */
function closeFullscreenImage() {
  modal.style.display = "none";
}

// Xử lý sự kiện khi người dùng nhấn phím ESC để đóng modal
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeFullscreenImage();
    }
});
/*Nhúng footer*/
// Đặt code này vào file JavaScript của bạn (ví dụ: CongDong.js)

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy phần tử container mà bạn muốn nhúng code header vào
    const headerContainer = document.getElementById('footer');
    
    // 2. Kiểm tra xem phần tử có tồn tại không
    if (headerContainer) {
        // 3. Sử dụng fetch() để tải nội dung của header.html
        fetch('footer.html') // Đảm bảo đường dẫn này đúng
            .then(response => {
                // Kiểm tra xem response có OK không (Status code 200)
                if (!response.ok) {
                    throw new Error('Không thể tải header.html: ' + response.statusText);
                }
                return response.text(); // Chuyển response thành văn bản (HTML)
            })
            .then(html => {
                // 4. Chèn nội dung HTML đã tải vào phần tử container
                headerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Lỗi khi nhúng footer:', error);
                // Có thể hiển thị thông báo lỗi cho người dùng ở đây
            });
    }
}); 

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy phần tử container mà bạn muốn nhúng code header vào
    const headerContainer = document.getElementById('noibat');
    
    // 2. Kiểm tra xem phần tử có tồn tại không
    if (headerContainer) {
        // 3. Sử dụng fetch() để tải nội dung của header.html
        fetch('noibat.html') // Đảm bảo đường dẫn này đúng
            .then(response => {
                // Kiểm tra xem response có OK không (Status code 200)
                if (!response.ok) {
                    throw new Error('Không thể tải noibat.html: ' + response.statusText);
                }
                return response.text(); // Chuyển response thành văn bản (HTML)
            })
            .then(html => {
                // 4. Chèn nội dung HTML đã tải vào phần tử container
                headerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Lỗi khi nhúng noibat:', error);
                // Có thể hiển thị thông báo lỗi cho người dùng ở đây
            });
    }
}); 


/* */
document.addEventListener('DOMContentLoaded', initCanhanPage);

async function initCanhanPage() {
    // 1. Lấy tên tác giả từ URL (query parameter)
    const params = new URLSearchParams(window.location.search);
    const authorName = params.get('name');


    // Đặt tên tác giả vào tiêu đề tạm thời
    document.getElementById('author-name').textContent = decodeURIComponent(authorName);


    // 2. Tải và xử lý dữ liệu tác giả
    try {
        const response = await fetch('json/canhan.json');
        if (!response.ok) throw new Error("Không thể tải file canhan.json.");
        const authorsData = await response.json();
        
        // 3. Tìm khối dữ liệu của tác giả có tên trùng khớp
        // Dùng decodeURIComponent để đảm bảo so sánh đúng tên (vd: Mỹ Hằng vs Mỹ%20Hằng)
        const authorData = authorsData.find(a => a.name === decodeURIComponent(authorName));
        
        if (authorData) {
            updateAuthorProfile(authorData);
            
            // 5. Tải và hiển thị các bài viết liên quan
            const articleIds = authorData.id.split(',').map(id => id.trim()).filter(id => id.length > 0);
            if (articleIds.length > 0) {
                await fetchAndRenderArticles(articleIds);
            } 

        } 

    } catch (error) {
        console.error("Lỗi xử lý trang cá nhân:", error);
    }
}

/**
 * Cập nhật thông tin tác giả lên giao diện
 */
function updateAuthorProfile(data) {
    document.getElementById('author-name').textContent = data.name || "Tác giả";
    document.getElementById('author-avatar').src = data.scr || 'placeholder.jpg';
    document.getElementById('article-count').textContent = `Số bài viết: ${data.number || 0} bài`;
    document.getElementById('author-bio').textContent = data.bio || 'Chưa có tiểu sử.';
}

/* */
// =======================================================
// --- THÊM MỚI: HÀM TẢI VÀ LỌC BÀI VIẾT THEO ID (Mục đích 2) ---
// =======================================================
/**
 * Tải và hiển thị danh sách bài viết dựa trên ID của tác giả
 * @param {string[]} articleIds - Mảng chứa các ID bài viết (ví dụ: ['1', '8', '12'])
 */
// Lấy container cho danh sách bài viết của tác giả trên trang cá nhân
const articlesListContainer = document.getElementById('articles-list-container');
const feedContainer = document.getElementById('recipe-feed-container');
const paginationContainer = document.getElementById('pagination-container');
const imageTemplate = document.getElementById('recipe-card-template-image');
const textTemplate = document.getElementById('recipe-card-template-text-only');
const videoTemplate = document.getElementById('recipe-card-template-video');


async function fetchAndRenderArticles(articleIds) {
    // Sử dụng articlesListContainer đã định nghĩa ở trên (Mục 1)
    if (!articlesListContainer) return; 

    articlesListContainer.innerHTML = ''; // Xóa thông báo loading

    try {
        // 1. TẢI TOÀN BỘ DANH SÁCH BÀI VIẾT TỪ FILE CHUNG
        const response = await fetch('json/congdong.json');
        if (!response.ok) throw new Error("Không thể tải file congdong.json.");
        const allArticles = await response.json();

        // 2. CHUYỂN DANH SÁCH ID CỦA TÁC GIẢ THÀNH DẠNG SET ĐỂ TÌM KIẾM NHANH
        const authorArticleIds = new Set(articleIds.map(String));

        // 3. LỌC CÁC BÀI VIẾT CỦA TÁC GIẢ
        const authorArticles = allArticles.filter(article => 
            // So sánh ID bài viết (đảm bảo cả hai đều là chuỗi)
            // Ví dụ: Tìm bài viết nào có ID là '1' hoặc '8' hoặc '12'
            authorArticleIds.has(String(article.id)) 
        );

        if (authorArticles.length > 0) {
            // 4. HIỂN THỊ CÁC BÀI VIẾT ĐÃ LỌC
            authorArticles.forEach(article => {
                // Sử dụng hàm createRecipeCard đã có sẵn ở phía dưới
                const cardElement = createRecipeCard(article); 
                articlesListContainer.appendChild(cardElement);
            });
        } else {
            articlesListContainer.innerHTML = "<p>Tác giả này chưa có bài viết nào được công khai.</p>";
        }

    } catch (error) {
        console.error("Lỗi khi tải hoặc lọc bài viết:", error);
        articlesListContainer.innerHTML = `<p style="color: red;">Lỗi: Không thể tải danh sách bài viết.</p>`;
    }
}
// =======================================================

/* 
*/
let ALL_RECIPES = []; // Bây giờ là mảng rỗng, sẽ được điền sau khi tải JSON
let TOTAL_RECIPES = 0; // Sẽ được cập nhật sau khi tải JSON
/*const TOTAL_RECIPES = 20;*/

/*const RECIPES_PER_LOAD = 0;*/
const RECIPES_PER_PAGE = 10;
// MAX_RECIPES sẽ bằng TOTAL_RECIPES
let currentPage = 1;

/*

*/
// Hàm để tạo một bài viết từ dữ liệu và template
function createRecipeCard(recipeData) {
    // Trong ví dụ này, tôi chỉ dùng template 'image' để minh họa.
    // Bạn cần logic để chọn template dựa trên recipeData.type
    let template; 
    
    // 1. Chọn template dựa trên loại bài viết
    switch (recipeData.type) {
        case 'text-only':
            template = textTemplate;
            break;
        case 'video':
            template = videoTemplate;
            break;
        case 'image':
        default:
            template = imageTemplate;
            break;
    }
    
    // Tạo bản sao của nội dung template
    const fragment = template.content.cloneNode(true);
    
    // 2. Điền dữ liệu chung (áp dụng cho tất cả các loại)
    // Giả sử dữ liệu tác giả luôn giống nhau trong ví dụ này
    fragment.querySelector('.dish-name').textContent = recipeData.title;

    // Tên tác giả (map từ 'name' trong JSON)
    const authorNameElement = fragment.querySelector('.author-name');
    if (authorNameElement && recipeData.name) {
        authorNameElement.textContent = recipeData.name;
        if (recipeData.link && recipeData.name) {
            // EncodeURIComponent để xử lý tên tiếng Việt có dấu và khoảng trắng
            const encodedName = encodeURIComponent(recipeData.name);
            
            // Link sẽ có dạng: Canhan.html?name=Mỹ%20Hằng
            authorNameElement.href = `${recipeData.link}?name=${encodedName}`;
        } else {
            // Nếu không có link, giữ nguyên href="#", nhưng tốt nhất là link phải có
            authorNameElement.href = "#"; 
        }
    }

    // Ảnh tác giả (map từ 'scr' trong JSON)
    const authorAvatarElement = fragment.querySelector('.author-avatar');
    if (authorAvatarElement && recipeData.scr) {
        authorAvatarElement.src = recipeData.scr;
        authorAvatarElement.alt = `Ảnh tác giả ${recipeData.name || ''}`;
    }

    // Thời gian đăng bài (map từ 'time' trong JSON)
    const postDateElement = fragment.querySelector('.post-date');
    if (postDateElement && recipeData.time) {
        postDateElement.textContent = recipeData.time;
    }
    
    // Tìm phần tử đoạn trích dẫn, nó có thể là <a>...</a> hoặc <p>...</p> trong template
    let excerptElement = fragment.querySelector('.article-excerpt p') || fragment.querySelector('.excerpt-text');
    if (excerptElement) {
        excerptElement.textContent = recipeData.excerpt || 'Không có đoạn trích dẫn.';
    }

    // Gán link Chi tiết bài báo với ID
    const readMoreLink = fragment.querySelector('.read-more-link');
    if (readMoreLink && recipeData.id) {
        // Tạo link có chứa ID: Ví dụ: BaiBao.html?id=8
        readMoreLink.href = `BaiBao.html?id=${recipeData.id}`;
    }

    // 3. Xử lý dữ liệu đặc thù
    if (recipeData.type === 'image') {
        const imgElement = fragment.querySelector('.recipe-image');
        if (imgElement && recipeData.imageSrc) {
            imgElement.src = recipeData.imageSrc;
            // Cập nhật hàm onclick để truyền đúng src
            const dishName = recipeData.title.replace(/'/g, "\\'");
            imgElement.setAttribute('onclick', `openFullscreenImage('${recipeData.imageSrc}', '${dishName}')`);
        }
    } else if (recipeData.type === 'video') {
        const videoColumn = fragment.querySelector('.video-column');
        if (videoColumn && recipeData.videoEmbedUrl) {
            // Tạo iframe cho video nhúng (ví dụ: YouTube)
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', recipeData.videoEmbedUrl);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.classList.add('recipe-video-embed'); // Thêm class để dễ dàng CSS

            // Xóa placeholder và chèn iframe vào
            const placeholder = fragment.querySelector('.video-placeholder');
            if(placeholder) {
                videoColumn.removeChild(placeholder);
            }
            videoColumn.appendChild(iframe);
        }
    }

    // Trả về DocumentFragment hoàn chỉnh
    return fragment;
}
/*
*/





