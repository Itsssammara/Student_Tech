<template>
    <div class="admin">
        <h1>Admin page</h1>
        <table>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
        <tbody admin-table>

        </tbody>
        <tr>
          <td>
            <input type="text" placeholder="Number ID" id="idNew">
          </td>
          <td>
            <input type="text" placeholder="Item Name" id="newName">
          </td>
          <td>
            <input type="text" placeholder="Insert Item" id="newPic">
          </td>
          <td>
            <input type="text" placeholder="Insert Price" id="newCost">
          </td>
          <td><button id="addButton">Add</button></td>
          <td><button id="delButton">Delete</button></td>
        </tr>
      </table>
    </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.admin {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f1aaf;
  background-image: url('https://i.postimg.cc/yY9GZfpk/examplebg.jpg');
  background-size: cover;
  background-position: center;
}
</style>