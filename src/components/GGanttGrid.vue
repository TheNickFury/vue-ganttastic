<template>
  <div class="g-grid-container">
    <div
      v-for="{ label, value, date, width } in timeaxisUnits.lowerUnits"
      :key="label"
      class="g-grid-line"
      :style="{
        width,
        background:
          highlightDates?.includes(dayjs(date).format('YYYY-MM-DD')) ||
          highlightedUnits?.includes(Number(value))
            ? colors.hoverHighlight
            : undefined
      }"
    />
  </div>
</template>

<script setup lang="ts">
import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits.js"
import dayjs from "dayjs"

defineProps<{
  highlightedUnits?: number[]
  highlightDates?: string[]
}>()

const { colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()
</script>

<style>
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
</style>
