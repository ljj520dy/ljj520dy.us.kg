window.onload = function () {
    const carousel = document.getElementById('carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;
    const imageCount = images.length;
    const intervalTime = 1000; // 每张图片切换间隔时间，单位毫秒，这里设置为3秒，可根据需求调整
    let intervalId;

    // 显示指定索引的图片
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index? 'block' : 'none';
        });
    }

    // 切换到下一张图片
    function nextImage() {
        currentIndex = (currentIndex + 1) % imageCount;
        showImage(currentIndex);
    }

    // 切换到上一张图片
    function prevImage() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        showImage(currentIndex);
    }

    // 自动轮播函数
    function startAutoPlay() {
        intervalId = setInterval(nextImage, intervalTime);
    }

    // 鼠标移入轮播图区域时暂停自动轮播
    carousel.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // 鼠标移出轮播图区域时继续自动轮播
    carousel.addEventListener('mouseleave', function () {
        startAutoPlay();
    });

    // 给切换按钮添加点击事件
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // 初始显示第一张图片并启动自动轮播
    showImage(currentIndex);
    startAutoPlay();

    // 获取弹出框元素及其内部内容元素和关闭按钮元素
    const popup = document.getElementById('popup-description');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.getElementById('popup-close');

    // 获取轮播图中的每张图片元素，添加点击事件显示弹出框
    images.forEach((img) => {
        img.addEventListener('click', function () {
            popup.style.display = 'block';
        });
    });

    // 给弹出框添加点击事件，用于关闭弹出框
    popup.addEventListener('click', function (e) {
        if (e.target === this || e.target === popupClose) {
            popup.style.display = 'none';
        }
    });
};
