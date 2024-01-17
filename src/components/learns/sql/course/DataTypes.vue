<template>
    <div class="content-course">
        <h1 class="title-content-course">MySQL Data Types</h1>
        <p class="text-content">Có 3 loại data chính: string, numeric, date and time.</p>

        <h5 class="title-child">String Data Types</h5><br>
        <div class="text-content">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Data type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>CHAR(size)</td>
                        <td>A FIXED length string, size from 0 to 255, default is 1.</td>
                    </tr>
                    <tr>
                        <td>VARCHAR(size)</td>
                        <td>A VARIABLE length string, size from 0 to 65535.</td>
                    </tr>
                    <tr>
                        <td>BINARY(size)</td>
                        <td>Stores binary byte strings, default is 1.</td>
                    </tr>
                    <tr>
                        <td>TEXT(size)</td>
                        <td>Holds a string with a maximum length of 65,535 bytes.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="title-child">Numeric Data Types</h5><br>
        <div class="text-content">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Data type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>INT(size)</td>
                        <td>A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295. The size parameter specifies the maximum display width (which is 255).</td>
                    </tr>
                    <tr>
                        <td>FLOAT</td>
                        <td>A floating point number.</td>
                    </tr>
                    <tr>
                        <td>DOUBLE</td>
                        <td>A normal-size floating point number.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="title-child">Date and Time Data Types</h5><br>
        <div class="text-content">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:15%">Data type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>DATE</td>
                        <td>A date. Format: YYYY-MM-DD.</td>
                    </tr>
                    <tr>
                        <td>DATETIME(fsp)</td>
                        <td>A date and time combination. Format: YYYY-MM-DD hh:mm:ss. Adding DEFAULT and ON UPDATE in the column definition to get automatic initialization and updating to the current date and time. DATETIME can store a wider range of values than TIMESTAMP.</td>
                    </tr>
                    <tr>
                        <td>TIMESTAMP(fsp)</td>
                        <td>A timestamp. Format: YYYY-MM-DD hh:mm:ss. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP in the column definition.</td>
                    </tr>
                    <tr>
                        <td>TIME(fsp)</td>
                        <td>A time. Format: hh:mm:ss.</td>
                    </tr>
                    <tr>
                        <td>YEAR</td>
                        <td>A yeah. Format: 1901 to 2155.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>