<template>
  <div class="card">
    <div class="heading">
      <p >Name:</p>
      <p>Pick Up Order:</p>
      <p>Trip Duration:</p>
      <p>Route:</p>
      <p>Actions:</p>
    </div>
    <div class="body">
      <div>{{ passenger.name }}</div>
      <div>{{ passenger.pickUpOrder }}</div>
      <div>{{ passenger.tripDuration.text }}</div>
      <div>
        <button class="secondary" @click="goToDetails(passenger)">
          Go To Details
        </button>
      </div>
      <div>
        <i
          style="margin-right: 5px"
          class="fas fa-edit"
          @click="editPassenger(item)"
        ></i>
        <i class="fas fa-trash-alt" @click="deletePassenger(passenger)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    passenger: {
      type: Object,
      required: false,
    },
  },
  methods: {
    deletePassenger(item) {
      this.$emit("deletePassenger", item);
    },
    editPassenger(item) {
      this.$emit("editPassenger", item);
    },
    goToDetails(item) {
      this.$emit("goToDetails", item);
    },
  },
};
</script>
