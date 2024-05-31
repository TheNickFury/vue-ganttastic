<template>
  <div class="g-grid-container">
    <div
      v-for="{ label, value, date, width } in timeaxisUnits.lowerUnits"
      :key="label"
      class="g-grid-line"
      :style="{
        width,
        background:
          highlightDatesTemp?.includes(dayjs(date).format('YYYY-MM-DD')) ||
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

const props = defineProps<{
  highlightedUnits?: number[]
  highlightDates: string[]
}>()

const { colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()

function getWeekendDays(startDate: string, endDate: string): string[] {
  // Converti le date di input in oggetti dayjs
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  // Array per memorizzare i giorni del weekend
  const weekendDays = [];

  // Itera sui giorni nell'intervallo
  let current = start;
  while (current.isBefore(end) || current.isSame(end, 'day')) {
    // Controlla se il giorno corrente è sabato (6) o domenica (0)
    if (current.day() === 6 || current.day() === 0) {
      weekendDays.push(current.format('YYYY-MM-DD'));
    }
    // Passa al giorno successivo
    current = current.add(1, 'day');
  }

  return weekendDays;
}

let highlightDatesTemp: string[]

const startDate = dayjs(timeaxisUnits.value.upperUnits[0].date).format("YYYY-MM-DD");
const endDate = dayjs(timeaxisUnits.value.upperUnits[1].date).format("YYYY-MM-DD");
const weekends = getWeekendDays(startDate, endDate);
highlightDatesTemp = [...weekends, ...props.highlightDates]
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
