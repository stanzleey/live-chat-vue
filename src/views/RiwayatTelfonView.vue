<template>
  <div class="call-history-container">
    <!-- Call history list on the left -->
    <DaftarRiwayatTelfon :calls="callHistory" @view-detail="showCallDetail" />

    <!-- Call detail view on the right, visible only if a call is selected -->
    <DetailRiwayatTelfon
      v-if="selectedCall"
      :call="selectedCall"
      @close-detail="closeCallDetail"
    />
  </div>
</template>

<script>
//   import DaftarRiwayatTelfon from "./DaftarRiwayatTelfon.vue";
import DetailRiwayatTelfon from "@/components/DetailRiwayatTelfon.vue";
import DaftarRiwayatTelfon from "@/components/DaftarRiwayatTelfon.vue";
export default {
  components: {
    DaftarRiwayatTelfon,
    DetailRiwayatTelfon,
  },
  data() {
    return {
      callHistory: [
        {
          id: 1,
          customerName: "John Doe",
          date: "2023-10-01",
          time: "10:00 AM",
          type: "incoming",
          duration: 15,
          notes: "Discussed new product features",
        },
        {
          id: 2,
          customerName: "Jane Smith",
          date: "2023-10-02",
          time: "2:30 PM",
          type: "outgoing",
          duration: 20,
          notes: "Resolved billing issue",
        },
        // More call records...
      ],
      selectedCall: null,
    };
  },
  methods: {
    showCallDetail(call) {
      this.selectedCall = call;
    },
    closeCallDetail() {
      this.selectedCall = null;
    },
  },
};
</script>

<style scoped>
.call-history-container {
  margin-left: 200px;
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: flex-start;
}

/* Flex item for call history list */
.call-history-container > *:first-child {
  flex: 1;
  max-width: 400px;
}

/* Flex item for call detail view */
.call-history-container > *:last-child {
  flex: 1;
  max-width: 500px;
}
</style>
