// AI对话功能
function openAIChat() {
    document.getElementById('ai-chat-modal').style.display = 'block';
}

function closeAIChat() {
    document.getElementById('ai-chat-modal').style.display = 'none';
}

// 发送消息到AI
async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    // 显示用户消息
    displayMessage(userInput, 'user');
    
    // 显示加载动画
    showLoadingAnimation();

    try {
        // 这里应该是向AI服务发送请求的代码
        const response = await axios.post('AI_API_ENDPOINT', { message: userInput });
        const aiReply = response.data.reply;
        
        // 隐藏加载动画
        hideLoadingAnimation();
        
        // 使用打字机效果显示AI回复
        typeWriterEffect(aiReply);
    } catch (error) {
        console.error('Error:', error);
        hideLoadingAnimation();
        displayMessage('抱歉，出现了一些错误。', 'ai');
    }
}

// 打字机效果
function typeWriterEffect(text, index = 0) {
    if (index < text.length) {
        document.getElementById('ai-replies').innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriterEffect(text, index), 50);
    }
}

// 返回顶部功能
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
};

document.getElementById('back-to-top').onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// 照片轮播功能
// 这里可以使用Bootstrap的Carousel组件或自定义实现

// 初始化Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 添加滚动动画
function addScrollAnimation() {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
            element.classList.add('animate__fadeInUp');
        }
    });
}

window.addEventListener('scroll', addScrollAnimation);
window.addEventListener('load', addScrollAnimation);

// 其他JavaScript代码保持不变