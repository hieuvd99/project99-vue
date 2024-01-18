<template>
    <div class="content-course">
        <h1 class="title-content-course">Java Basic</h1>

        <h5 class="title-child">Các kiểu dữ liệu</h5>
        <div class="text-content">
            <p>Các kiểu dữ liệu nguyên thủy (Primitive Data Types): 8 kiểu: boolean, byte, char, short, int, long, float, double</p>
            <p>Các kiểu dữ liệu tham chiếu (Reference Types): 3 kiểu: Array, Class, Interface</p>
        </div>
        
        <h5 class="title-child">Biến và phạm vi của biến</h5>
        <div class="text-content">
            <p>Có 3 kiểu biến trong java, bao gồm biến cục bộ (hay còn gọi là biến local), biến toàn cục (biến instance) và biến tĩnh(biến static).</p>
            <p><b>Biến local</b>: Biến local được khai báo trong function, mothod, block phạm vi trong đó. Nằm trên vùng bộ nhớ stack của bộ nhớ.</p>
            <p><b>Biến instance</b>: Biến instance được khai báo trong class, bên ngoài function, mothod, block. Được lưu trong bộ nhớ heap.</p>
            <p><b>Biến static</b>: Biến instance được khai báo trong class với từ khóa <code>static</code>, bên ngoài function, mothod, block. Được lưu trong bộ nhớ static riêng.</p>
        </div>



    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>