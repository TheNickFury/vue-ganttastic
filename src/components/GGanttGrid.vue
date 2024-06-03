<template>
  <div class="g-grid-container">
    <div
      v-for="{ label, value, date, width } in timeaxisUnits.lowerUnits"
      :key="label"
      class="g-grid-line"
      :style="{
        width,
        background:
          highlightDatesValues?.includes(dayjs(date).format('YYYY-MM-DD')) ||
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
import { ref, watch } from "vue"

const props = defineProps<{
  highlightedUnits?: number[]
  highlightDates: string[]
  chartStart: string | Date
  chartEnd: string | Date
}>()

const { colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()
const highlightDatesValues = ref<(string | Date)[]>([])

function getEasterDate(year: number): dayjs.Dayjs {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return dayjs(`${year}-${month}-${day}`)
}

function getSpecialDays(startDate: string, endDate: string): string[] {
  const start = dayjs(startDate)
  const end = dayjs(endDate)
  const specialDays: string[] = []

  // Elenco delle festività italiane fisse
  const holidays = [
    "01-01", // Capodanno
    "01-06", // Epifania
    "04-25", // Festa della Liberazione
    "05-01", // Festa dei Lavoratori
    "06-02", // Festa della Repubblica
    "08-15", // Ferragosto
    "11-01", // Ognissanti
    "12-08", // Immacolata Concezione
    "12-25", // Natale
    "12-26" // Santo Stefano
  ]

  // Calcola la data di Pasqua e Pasquetta per gli anni nell'intervallo
  const startYear = start.year()
  const endYear = end.year()
  for (let year = startYear; year <= endYear; year++) {
    const easter = getEasterDate(year)
    const easterMonday = easter.add(1, "day")
    holidays.push(easter.format("MM-DD"))
    holidays.push(easterMonday.format("MM-DD"))
  }

  let current = start
  while (current.isBefore(end) || current.isSame(end, "day")) {
    const formattedDate = current.format("YYYY-MM-DD")
    const formattedMonthDay = current.format("MM-DD")

    // Controlla se è un weekend
    if (current.day() === 6 || current.day() === 0) {
      specialDays.push(formattedDate)
    }

    // Controlla se è una festività
    if (holidays.includes(formattedMonthDay)) {
      specialDays.push(formattedDate)
    }

    current = current.add(1, "day")
  }

  return specialDays
}

const startDate = dayjs(props.chartStart).format("YYYY-MM-DD")
const endDate = dayjs(props.chartEnd).add(1, "month").format("YYYY-MM-DD")
const specialDays = getSpecialDays(startDate, endDate)

highlightDatesValues.value = [...specialDays, ...props.highlightDates]

watch(
  () => props.chartStart,
  () => {
    const startDate = dayjs(props.chartStart).format("YYYY-MM-DD")
    const endDate = dayjs(props.chartEnd).add(1, "month").format("YYYY-MM-DD")
    const specialDays = getSpecialDays(startDate, endDate)

    highlightDatesValues.value = [...specialDays, ...props.highlightDates]
  }
)
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
