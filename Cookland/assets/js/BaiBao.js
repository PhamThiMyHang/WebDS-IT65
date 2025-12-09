function ClickLike() {
    const likeIcon = document.getElementById('like-button');
    likeIcon.classList.toggle('red');
    likeIcon.classList.toggle('white');
    
}
function ClickSave(){
    const saveIcon = document.getElementById('save-button');
    saveIcon.classList.toggle('white');
    saveIcon.classList.toggle('orange');
}




// Dữ liệu mẫu cho các bình luận tiếp theo
const allComments = [
    { author: 'Tác giả A', time: '1 giờ trước', content: 'Đây là bình luận thứ 4.', avatar: 'avatar4.jpg' },
    { author: 'Tác giả B', time: '2 giờ trước', content: 'Đây là bình luận thứ 5.', avatar: 'avatar5.jpg' },
    { author: 'Tác giả C', time: '3 giờ trước', content: 'Đây là bình luận thứ 6.', avatar: 'avatar6.jpg' },
    { author: 'Tác giả D', time: '4 giờ trước', content: 'Đây là bình luận thứ 7.', avatar: 'avatar7.jpg' },
    { author: 'Tác giả E', time: '5 giờ trước', content: 'Đây là bình luận thứ 8.', avatar: 'avatar8.jpg' },
    { author: 'Tác giả F', time: '6 giờ trước', content: 'Đây là bình luận thứ 9.', avatar: 'avatar9.jpg' },
    // Thêm các bình luận khác nếu cần
];

let commentsLoaded = 0; // Biến đếm số bình luận đã tải
const commentsPerLoad = 3; // Số bình luận tải thêm mỗi lần

// 1. Hàm ẩn/hiện khung bình luận
function ClickComment() {
    const commentBox = document.getElementById('commentBox');
    // Sử dụng class 'hidden' để ẩn/hiện
    commentBox.classList.toggle('hidden'); 
}

// 2. Hàm tạo HTML cho một bình luận
function createCommentElement(comment) {
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    
    commentItem.innerHTML = `
        <div class="comment-meta">
            <a href="#" class="author-link">
                <img src="${comment.avatar}" alt="Avatar" class="avatar">
                <strong>${comment.author}</strong>
            </a>
            <span class="timestamp"> | ${comment.time}</span>
        </div>
        <div class="comment-content">
            ${comment.content}
        </div>
    `;
    return commentItem;
}

// 3. Hàm tải thêm bình luận
function loadMoreComments() {
    const commentList = document.getElementById('commentList');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // Tính toán bình luận cần tải
    const startIndex = commentsLoaded;
    const endIndex = Math.min(startIndex + commentsPerLoad, allComments.length);
    
    if (startIndex < allComments.length) {
        // Tải 3 bình luận tiếp theo
        for (let i = startIndex; i < endIndex; i++) {
            const comment = allComments[i];
            const commentElement = createCommentElement(comment);
            commentList.appendChild(commentElement);
        }
        
        commentsLoaded = endIndex; // Cập nhật số lượng đã tải
        
        // Ẩn nút "Xem thêm" nếu đã tải hết
        if (commentsLoaded === allComments.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// 4. Xử lý gửi bình luận mới
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi theo cách truyền thống
    
    const commentText = document.getElementById('commentText').value.trim();
    if (commentText) {
        // Tạo đối tượng bình luận mới (giả định)
        const newComment = {
            author: 'Bạn', // Tên người dùng hiện tại
            time: 'Vừa xong',
            content: commentText,
            avatar: 'your_avatar.jpg' // Ảnh của bạn
        };

        const commentList = document.getElementById('commentList');
        const newCommentElement = createCommentElement(newComment);
        
        // Thêm bình luận mới vào đầu danh sách
        commentList.prepend(newCommentElement);
        
        // Xóa nội dung input
        document.getElementById('commentText').value = '';
    }
});

// Tải 3 bình luận đầu tiên (giả định đã có 3 bình luận mẫu trong HTML)
// loadMoreComments(); 
// Lưu ý: Nếu muốn bắt đầu chỉ với ô input và nút xem thêm, bạn cần xóa 3 bình luận mẫu khỏi HTML và gọi hàm loadMoreComments() ở đây.



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



/*Định nghĩa ID cần tải */
document.addEventListener('DOMContentLoaded', initBaiBao);

/**
 * Hàm khởi tạo cho trang BaiBao.html
 */
function initBaiBao() {
    // 1. Lấy ID từ URL
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('id');

    if (recipeId) {
        // 2. Định nghĩa tên file JSON cần tải
        // Giả sử file chi tiết nằm trong thư mục 'json/' và có tên là id[SỐ ID].json
        const jsonFileName = `json/congdong/id${recipeId}.json`; 
        
        fetchRecipeDetail(jsonFileName);
    } else {
        document.getElementById('article-title').textContent = "Lỗi: Không tìm thấy ID bài viết.";
        const contentContainer = document.getElementById('article-content-container');
        if (contentContainer) {
             contentContainer.innerHTML = "<p style='color: red;'>Vui lòng trở lại trang Cộng đồng để chọn một bài viết hợp lệ.</p>";
        }
    }
}

/**
 * Tải dữ liệu chi tiết bài viết từ file JSON
 * @param {string} jsonPath - Đường dẫn đến file JSON chi tiết (ví dụ: json/id8.json).
 */
async function fetchRecipeDetail(jsonPath) {
    const contentContainer = document.getElementById('article-content-container');
    
    try {
        const response = await fetch(jsonPath);
        
        if (!response.ok) {
            throw new Error(`Lỗi ${response.status}: Không thể tải file ${jsonPath}.`);
        }
        
        const recipeDetailData = await response.json();
        
        // Cập nhật thông tin cố định (Tiêu đề, Tác giả, Thời gian)
        updateFixedInfo(recipeDetailData);

        // Hiển thị nội dung động (Các blocks)
        if (recipeDetailData.blocks && contentContainer) {
            renderArticleContent(recipeDetailData.blocks, contentContainer);
        } else if (contentContainer) {
             contentContainer.innerHTML = "<p>Bài viết này chưa có nội dung chi tiết.</p>";
        }

    } catch (error) {
        console.error("Lỗi tải chi tiết bài viết:", error);
        if (contentContainer) {
             contentContainer.innerHTML = `<p style="color: red;">Đã xảy ra lỗi khi tải dữ liệu chi tiết: ${error.message}</p>`;
        }
    }
}

/**
 * Cập nhật các thông tin cố định (Tác giả, Avatar, Title)
 */
function updateFixedInfo(data) {
    document.getElementById('article-title').textContent = data.title || "Tiêu đề không rõ";

    const authorNameElement = document.getElementById('author-name');
    if (authorNameElement) {
        authorNameElement.textContent = data.name || "Ẩn danh";
        // Cập nhật link cá nhân (từ trường 'link' trong JSON)
        if (data.link) {
            authorNameElement.href = data.link;
        }
    }

    const authorAvatarElement = document.getElementById('author-avatar');
    if (authorAvatarElement && data.scr) {
        authorAvatarElement.src = data.scr;
    }

    const postDateElement = document.getElementById('post-date');
    if (postDateElement && data.time) {
        postDateElement.textContent = data.time;
    }
}

/**
 * Dựng nội dung bài viết từ mảng các khối (blocks)
 * Hàm này linh hoạt xử lý Paragraph, Image, Video, Heading, List.
 */
function renderArticleContent(blocks, containerElement) {
    containerElement.innerHTML = ''; // Xóa placeholder "Đang tải..."

    blocks.forEach(block => {
        let element;

        switch (block.type) {
            case 'paragraph':
                element = document.createElement('p');
                element.textContent = block.content;
                break;

            case 'image':
                element = document.createElement('figure'); 
                const img = document.createElement('img');
                img.src = block.src;
                img.alt = block.alt || "Hình ảnh minh họa";
                // Cho phép phóng to ảnh nếu cần (dùng lại hàm openFullscreenImage)
                img.onclick = () => openFullscreenImage(block.src, block.caption || block.alt); 
                element.appendChild(img);
                
                if (block.caption) {
                    const caption = document.createElement('figcaption');
                    caption.textContent = block.caption;
                    element.appendChild(caption);
                }
                element.classList.add('article-image-block'); 
                break;

            case 'video':
                element = document.createElement('div');
                element.classList.add('article-video-block');
                const iframe = document.createElement('iframe');
                iframe.src = block.embedUrl;
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', 'true');
                element.appendChild(iframe);
                break;
                
            case 'heading':
                // level 1-6
                const level = Math.min(6, Math.max(1, block.level || 2)); 
                element = document.createElement(`h${level}`); 
                element.textContent = block.content;
                break;
                
            case 'list':
                element = document.createElement('ul'); 
                if (block.items && Array.isArray(block.items)) {
                    block.items.forEach(itemText => {
                        const li = document.createElement('li');
                        li.textContent = itemText;
                        element.appendChild(li);
                    });
                }
                break;

            // Bạn có thể thêm các loại block khác ở đây (ví dụ: quote, code, table)
            
            default:
                return; 
        }

        if (element) {
            containerElement.appendChild(element);
        }
    });
}
