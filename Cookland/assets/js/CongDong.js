

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
const feedContainer = document.getElementById('recipe-feed-container');
const paginationContainer = document.getElementById('pagination-container');
const imageTemplate = document.getElementById('recipe-card-template-image');
const textTemplate = document.getElementById('recipe-card-template-text-only');
const videoTemplate = document.getElementById('recipe-card-template-video');

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
        if (recipeData.link) {
            authorNameElement.href = recipeData.link;
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
/**
 * Tải và hiển thị các công thức cho một trang cụ thể.
 * @param {number} pageNumber - Số trang cần tải (bắt đầu từ 1).
 */
function loadRecipesForPage(pageNumber) {
    // 1. Cập nhật trạng thái trang
    currentPage = pageNumber;

    // 2. Tính toán chỉ mục BẮT ĐẦU và KẾT THÚC
    const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
    // Đảm bảo endIndex không vượt quá tổng số công thức
    const endIndex = Math.min(startIndex + RECIPES_PER_PAGE, TOTAL_RECIPES);

    // 3. XÓA các bài viết cũ khỏi vùng chứa (RẤT QUAN TRỌNG)
    feedContainer.innerHTML = '';
    
    // 4. Tạo DocumentFragment để tối ưu hiệu suất
    const newElementsFragment = document.createDocumentFragment();

    for (let i = startIndex; i < endIndex; i++) {
        if (ALL_RECIPES[i]) {
            const recipeData = ALL_RECIPES[i];
            const recipeCard = createRecipeCard(recipeData); // Sử dụng lại hàm tạo card cũ
            newElementsFragment.appendChild(recipeCard);
        }
    }

    // 5. Chèn các bài viết mới vào DOM
    feedContainer.appendChild(newElementsFragment);
    
    // 6. Cập nhật và tạo lại các nút phân trang
    renderPaginationButtons();
    
    // Tùy chọn: Cuộn lên đầu trang sau khi tải trang mới
    window.scrollTo(0, 0); 
}

function renderPaginationButtons() {
    paginationContainer.innerHTML = ''; // Xóa các nút cũ

    const totalPages = Math.ceil(TOTAL_RECIPES / RECIPES_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('page-button');
        
        // Đánh dấu nút trang hiện tại
        if (i === currentPage) {
            button.classList.add('active');
        }

        // Gán sự kiện khi click
        button.addEventListener('click', () => {
            loadRecipesForPage(i);
        });

        paginationContainer.appendChild(button);
    }
}

async function init() {
    try {
        // Tải dữ liệu từ file JSON (Đảm bảo file recipes.json nằm đúng chỗ)
        const response = await fetch('json/congdong.json'); 
        
        // Xử lý lỗi nếu tải không thành công (Ví dụ: File không tồn tại hoặc lỗi mạng)
        if (!response.ok) {
            // Thông báo lỗi cụ thể hơn nếu không tìm thấy file 404
            throw new Error(`Lỗi tải dữ liệu: ${response.status} (${response.statusText}). Đảm bảo file recipes.json tồn tại và ứng dụng chạy trên Local Server.`);
        }
        
        // Chuyển đổi phản hồi thành đối tượng JavaScript
        const data = await response.json();
        
        // Cập nhật các biến toàn cục với dữ liệu thực tế
        ALL_RECIPES = data;
        TOTAL_RECIPES = ALL_RECIPES.length;

        // Bắt đầu bằng cách tải TRANG 1
        loadRecipesForPage(1); 

    } catch (error) {
        console.error('Lỗi nghiêm trọng khi khởi tạo:', error);
        // Hiển thị thông báo lỗi thân thiện cho người dùng trên giao diện
        if (feedContainer) {
             feedContainer.innerHTML = `<div style="padding: 20px; color: red; text-align: center; border: 1px solid red; margin: 20px;">
                                           <strong>LỖI TẢI DỮ LIỆU:</strong> Không thể tải công thức. Vui lòng kiểm tra console để xem chi tiết.
                                       </div>`;
        }
    }
}

// Gọi hàm khởi tạo khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', init);


