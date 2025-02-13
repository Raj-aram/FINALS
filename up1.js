function uploadFile() {
    let file = document.getElementById('fileInput').files[0];
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Rajaram'); // ✅ Use your actual upload preset

    fetch("https://api.cloudinary.com/v1_1/dqj7gfezj/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Upload successful!", data); // ✅ Log response for debugging
        alert("Upload Successful! 🎉 File URL: " + data.secure_url);

        // ✅ Display uploaded media
        let fileType = file.type.startsWith("image") ? "img" : "video";
        document.getElementById('preview').innerHTML = 
            `<${fileType} src="${data.secure_url}" controls></${fileType}>`;
    })
    .catch(error => {
        console.error("Upload error:", error);
        alert("Upload failed! Please try again.");
    });
}
