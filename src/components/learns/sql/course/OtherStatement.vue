<template>
    <div class="content-course">
        <h1 class="title-content-course">MySQL Other Statement</h1>

        <p class="name-table">Table <code>Customers</code></p>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <th style="width:15%">CustomerID</th>
                    <th>CustomerName</th>
                    <th>ContactName</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Vuong Dinh A</td>
                    <td>Mr A</td>
                    <td>VietNam</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Vuong Dinh B</td>
                    <td>Mr B</td>
                    <td>China</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Vuong Dinh C</td>
                    <td>Mr C</td>
                    <td>VietNam</td>
                </tr>
            </tbody>
        </table>

        <p class="name-table">Table <code>Employee</code></p>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <th style="width:15%">EmployeeID</th>
                    <th>EmployeeName</th>
                    <th>ContactName</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Vuong Dinh D</td>
                    <td>Mr D</td>
                    <td>USA</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vuong Dinh E</td>
                    <td>Mr E</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Vuong Dinh F</td>
                    <td>Mr F</td>
                    <td>USA</td>
                </tr>
            </tbody>
        </table>

        <h5 class="title-child"><code>UNION</code></h5>
        <div class="text-content">
            <p>Sử dụng để kết hợp kết quả của 2 hay nhiều câu lệnh SELECT, không trả về giá trị trùng lặp.</p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Customers.Country <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">UNION</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Employee.Country <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Employee</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Country</th>
                    </tr>
                    <tr>
                        <td>VietNam</td>
                    </tr>
                    <tr>
                        <td>China</td>
                    </tr>
                    <tr>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <td>Canada</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="title-child"><code>UNION ALL</code></h5>
        <div class="text-content">
            <p>Sử dụng để kết hợp kết quả của 2 hay nhiều câu lệnh SELECT, trả về giá trị trùng lặp.</p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Customers.Country <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">UNION ALL</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Employee.Country <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Employee</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Country</th>
                    </tr>
                    <tr>
                        <td>VietNam</td>
                    </tr>
                    <tr>
                        <td>China</td>
                    </tr>
                    <tr>
                        <td>VietNam</td>
                    </tr>
                    <tr>
                        <td>USA</td>
                    </tr>
                    <tr>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>USA</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="title-child"><code>GROUP BY</code></h5>
        <div class="text-content">
            <p>Dùng để nhóm các hàng có giá trị giống nhau.</p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Customers.Country
<span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">GROUP</span> <span style="color:rgb(1, 86, 146); font-weight:400;">BY</span> Customers.Country;</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Country</th>
                    </tr>
                    <tr>
                        <td>VietNam</td>
                    </tr>
                    <tr>
                        <td>China</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="title-child"><code>HAVING</code></h5>
        <div class="text-content">
            <p>Khi WHERE không dùng đước với các biểu thức tổng hợp như GROUP BY thì chúng ta dùng HAVING.</p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(183, 85, 1); font-weight:400;">COUNT</span>(Customers.CustomerID), Customers.Country
<span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">GROUP</span> <span style="color:rgb(1, 86, 146); font-weight:400;">BY</span> Customers.Country
<span style="color:rgb(1, 86, 146); font-weight:400;">HAVING</span> <span style="color:rgb(183, 85, 1); font-weight:400;">COUNT</span>(Customers.CustomerID) <span style="color:rgb(47, 51, 55); font-weight:400;">&gt;</span> <span style="color:rgb(183, 85, 1); font-weight:400;">1</span>;</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">COUNT(test.Customers.CustomerID)</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>VietNam</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="title-child"><code>EXISTS</code></h5>
        <div class="text-content">
            <p>Dùng để kiểm tra sự tồn tại của bản ghi trong câu truy vấn con.</p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Customers.Country
<span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">WHERE</span> <span style="color:rgb(1, 86, 146); font-weight:400;">EXISTS</span> (<span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> Employee.EmployeeName <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Employee <span style="color:rgb(1, 86, 146); font-weight:400;">WHERE</span> Customers.CustomerID <span style="color:rgb(47, 51, 55); font-weight:400;">=</span> Employee.EmployeeID);</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Country</th>
                    </tr>
                    <tr>
                        <td>VietNam</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>