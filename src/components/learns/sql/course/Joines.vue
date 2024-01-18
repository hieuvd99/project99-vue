<template>
    <div class="content-course">
        <h1 class="title-content-course">MySQL Joines</h1>
        <p class="text-content"><code>JOIN</code> kết hợp giữa các bảng dựa vào mối liên quan giữa chúng.</p>
        <img src="@/assets/image/learns/sql/join_type.png">
        
        <p class="name-table">Table <code>Orders</code></p>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <th style="width:15%">OrderID</th>
                    <th>CustomerID</th>
                    <th>OrderDate</th>
                </tr>
                <tr>
                    <td>1111</td>
                    <td>1</td>
                    <td>1999-01-01</td>
                </tr>
                <tr>
                    <td>2222</td>
                    <td>2</td>
                    <td>1999-02-02</td>
                </tr>
                <tr>
                    <td>3333</td>
                    <td>3</td>
                    <td>1999-03-03</td>
                </tr>
            </tbody>
        </table>

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
                    <td>Japan</td>
                </tr>
            </tbody>
        </table>

        <div class="text-content">
            <p class="name-table"><code>INNER JOIN</code></p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(47, 51, 55); font-weight:400;">*</span> <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Orders
<span style="color:rgb(1, 86, 146); font-weight:400;">INNER</span> <span style="color:rgb(1, 86, 146); font-weight:400;">JOIN</span> Customers <span style="color:rgb(1, 86, 146); font-weight:400;">ON</span> Orders.CustomerID<span style="color:rgb(47, 51, 55); font-weight:400;">=</span>Customers.CustomerID;</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">CustomerID</th>
                        <th>OrderID</th>
                        <th>OrderDate</th>
                        <th>CustomerID</th>
                        <th>CustomerName</th>
                        <th>ContactName</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3333</td>
                        <td>1999-03-03</td>
                        <td>3</td>
                        <td>Vuong Dinh A</td>
                        <td>Mr A</td>
                        <td>VietNam</td>
                    </tr>
                </tbody>
            </table>

            <p class="name-table"><code>LEFT JOIN</code></p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(47, 51, 55); font-weight:400;">*</span> <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">LEFT</span> <span style="color:rgb(1, 86, 146); font-weight:400;">JOIN</span> Orders <span style="color:rgb(1, 86, 146); font-weight:400;">ON</span> Customers.CustomerID <span style="color:rgb(47, 51, 55); font-weight:400;">=</span> Orders.CustomerID;</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">CustomerID</th>
                        <th>CustomerName</th>
                        <th>ContactName</th>
                        <th>Country</th>
                        <th>CustomerID</th>
                        <th>OrderID</th>
                        <th>OrderDate</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vuong Dinh A</td>
                        <td>Mr A</td>
                        <td>VietNam</td>
                        <td>3</td>
                        <td>3333</td>
                        <td>1999-03-03</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Vuong Dinh B</td>
                        <td>Mr B</td>
                        <td>China</td>
                        <td><i>NULL</i></td>
                        <td><i>NULL</i></td>
                        <td><i>NULL</i></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Vuong Dinh C</td>
                        <td>Mr C</td>
                        <td>Japan</td>
                        <td><i>NULL</i></td>
                        <td><i>NULL</i></td>
                        <td><i>NULL</i></td>
                    </tr>
                </tbody>
            </table>

            <p class="name-table"><code>CROSS JOIN</code></p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(47, 51, 55); font-weight:400;">*</span> <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">CROSS</span> <span style="color:rgb(1, 86, 146); font-weight:400;">JOIN</span> Orders;</code>
</pre>

            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">CustomerID</th>
                        <th>CustomerName</th>
                        <th>ContactName</th>
                        <th>Country</th>
                        <th>CustomerID</th>
                        <th>OrderID</th>
                        <th>OrderDate</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vuong Dinh A</td>
                        <td>Mr A</td>
                        <td>VietNam</td>
                        <td>3</td>
                        <td>3333</td>
                        <td>1999-03-03</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vuong Dinh A</td>
                        <td>Mr A</td>
                        <td>VietNam</td>
                        <td>2</td>
                        <td>2222</td>
                        <td>1999-02-02</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vuong Dinh A</td>
                        <td>Mr A</td>
                        <td>VietNam</td>
                        <td>1</td>
                        <td>1111</td>
                        <td>1999-01-01</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Vuong Dinh B</td>
                        <td>Mr B</td>
                        <td>China</td>
                        <td>3</td>
                        <td>3333</td>
                        <td>1999-03-03</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Vuong Dinh B</td>
                        <td>Mr B</td>
                        <td>China</td>
                        <td>2</td>
                        <td>2222</td>
                        <td>1999-02-02</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Vuong Dinh B</td>
                        <td>Mr B</td>
                        <td>China</td>
                        <td>1</td>
                        <td>1111</td>
                        <td>1999-01-01</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Vuong Dinh C</td>
                        <td>Mr C</td>
                        <td>Japan</td>
                        <td>3</td>
                        <td>3333</td>
                        <td>1999-03-03</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Vuong Dinh C</td>
                        <td>Mr C</td>
                        <td>Japan</td>
                        <td>2</td>
                        <td>2222</td>
                        <td>1999-02-02</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Vuong Dinh C</td>
                        <td>Mr C</td>
                        <td>Japan</td>
                        <td>1</td>
                        <td>1111</td>
                        <td>1999-01-01</td>
                    </tr>
                </tbody>
            </table>

            <img src="@/assets/image/learns/sql/example_join.png">
            <p class="name-table">Query A</p>
<pre><code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(47, 51, 55); font-weight:400;">*</span> <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers 
<span style="color:rgb(1, 86, 146); font-weight:400;">LEFT</span> <span style="color:rgb(1, 86, 146); font-weight:400;">JOIN</span> Orders <span style="color:rgb(1, 86, 146); font-weight:400;">ON</span> Customers.CustomerID <span style="color:rgb(47, 51, 55); font-weight:400;">=</span> Orders.CustomerID
<span style="color:rgb(1, 86, 146); font-weight:400;">WHERE</span> Customers.CustomerID <span style="color:rgb(1, 86, 146); font-weight:400;">IS</span> <span style="color:rgb(1, 86, 146); font-weight:400;">NULL</span> <span style="color:rgb(1, 86, 146); font-weight:400;">OR</span> Orders.CustomerID <span style="color:rgb(1, 86, 146); font-weight:400;">IS</span> <span style="color:rgb(1, 86, 146); font-weight:400;">NULL</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">UNION</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(47, 51, 55); font-weight:400;">*</span> <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">RIGHT</span> <span style="color:rgb(1, 86, 146); font-weight:400;">JOIN</span> Orders Orders <span style="color:rgb(1, 86, 146); font-weight:400;">ON</span> Customers.CustomerID <span style="color:rgb(47, 51, 55); font-weight:400;">=</span> Orders.CustomerID
<span style="color:rgb(1, 86, 146); font-weight:400;">WHERE</span> Customers.CustomerID <span style="color:rgb(1, 86, 146); font-weight:400;">IS</span> <span style="color:rgb(1, 86, 146); font-weight:400;">NULL</span> <span style="color:rgb(1, 86, 146); font-weight:400;">OR</span> Orders.CustomerID <span style="color:rgb(1, 86, 146); font-weight:400;">IS</span> <span style="color:rgb(1, 86, 146); font-weight:400;">NULL</span></code>
</pre>

            <p class="name-table">Query B</p>
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;background-color:rgb(246, 246, 246);background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">SELECT</span> <span style="color:rgb(47, 51, 55); font-weight:400;">*</span> <span style="color:rgb(1, 86, 146); font-weight:400;">FROM</span> Customers
<span style="color:rgb(1, 86, 146); font-weight:400;">RIGHT</span> <span style="color:rgb(1, 86, 146); font-weight:400;">JOIN</span> Orders <span style="color:rgb(1, 86, 146); font-weight:400;">ON</span> Customers.CustomerID <span style="color:rgb(47, 51, 55); font-weight:400;">=</span> Orders.CustomerID
<span style="color:rgb(1, 86, 146); font-weight:400;">WHERE</span> Customers.CustomerID <span style="color:rgb(1, 86, 146); font-weight:400;">IS</span> <span style="color:rgb(1, 86, 146); font-weight:400;">NULL</span></code>
</pre>

        </div>

    
    
    </div>
</template>

        
<script>

</script>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>