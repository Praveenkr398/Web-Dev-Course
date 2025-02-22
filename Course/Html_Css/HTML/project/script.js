function showImage(imageId) {
    // Hide all images
    const images = document.querySelectorAll('.image-content');
    images.forEach(img => img.classList.remove('active'));

    // Show selected image
    const selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('active');
}
