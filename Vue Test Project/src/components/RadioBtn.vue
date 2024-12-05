<script setup>

const emit = defineEmits(['sort']);

const sortUsers = (e) =>{
  emit('sort', e.target.value)
}

</script>

<template>
  <div class="sort">
  
    <h6>SORT BY:</h6>
    <label>
      Default
      <input type="radio" name="sortBy" value="Default" checked  @change="sortUsers" />
    </label>
    <label>
      Firstname
      <input type="radio" name="sortBy" value="firstname"  @change="sortUsers" />
    </label>
    <label>
      Lastname
      <input type="radio" name="sortBy" value="lastname"  @change="sortUsers" />
    </label>
    <label>
      Due Date
      <input type="radio" name="sortBy" value="dueDate"  @change="sortUsers" />
    </label>
    <label>
      Last login
      <input type="radio" name="sortBy" value="lastLogin"  @change="sortUsers" />
    </label>

    <h6 class="radio-2">USERS:</h6>
    <label>
      Active
      <input type="radio" name="userStatus" value="active"  @change="sortUsers" />
    </label>
    <label>
      Inactive
      <input type="radio" name="userStatus" value="inactive"  @change="sortUsers" />
    </label>
    <label>
      Paid
      <input type="radio" name="userStatus" value="paid"  @change="sortUsers" />
    </label>
    <label>
      Unpaid
      <input type="radio" name="userStatus" value="unpaid"  @change="sortUsers" />
    </label>
    <label>
      Overdue
      <input type="radio" name="userStatus" value="overdue"  @change="sortUsers" />
    </label>
  </div>
</template>

<style scoped>
.sort {
  background-color: #fff;
  width: 200px;
  margin: 0 auto;
  padding: 10px 2px;
  margin-bottom: 1rem;
  position: relative
}

.radio-2 {
  margin-top: 1rem;
}

.sort h6 {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 100;
}

.sort label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  width: 200px;
}

.cancel{
    background-color: #fff;
    position: absolute;
    left: 100%;
    top: -0.5rem;
    width: 5px;
    padding: 0 10px;
    border-radius: 50%;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
}
.cancel p{
    font-size: 0.9rem;
}

</style>
