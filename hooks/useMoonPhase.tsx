import { useState, useEffect } from "react";

type Props = {
  date: string;
};

type DateInformation = {
  year: number;
  month: number;
  day: number;
};

function useMoonPhase({ date }: Props) {
  const [moonPhasePercent, setMoonPhasePercent] = useState(0);
  const [moonPhaseName, setMoonPhaseName] = useState({});

  const convertedDate = new Date(date);
  const year = convertedDate.getFullYear();
  const month = convertedDate.getMonth() + 1;
  const day = convertedDate.getDate();

  function getMoonPhase({ year, month, day }: DateInformation) {
    const phases = [
      { name: "New Moon", percent: 0 },
      { name: "Waxing Crescent", percent: -25 },
      { name: "First Quarter", percent: -50 },
      { name: "Waxing Gibbous", percent: -85 },
      { name: "Full Moon", percent: 100 },
      { name: "Waning Gibbous", percent: 25 },
      { name: "Last Quarter", percent: 50 },
      { name: "Waning Crescent", percent: 75 },
      { name: "New Moon", percent: 0 },
    ];

    // Calculate the number of days since the most recent New Moon (January 6, 2000)
    const daysSinceNewMoon = Math.floor(
      365.25 * (year - 2000) + 30.6 * month + day - 694039.09 // Approximation of the number of days since the most recent New Moon
    );

    // Calculate the phase index (0 to 7) to determine the phase name
    const phaseIndex = (daysSinceNewMoon / 29.53) % 8;
    const positivePhaseIndex = phaseIndex >= 0 ? phaseIndex : phaseIndex + 8; // Normalize negative indices

    return phases[Math.floor(positivePhaseIndex)];
  }

  useEffect(() => {
    function calculateMoonPhase({ year, month, day }: DateInformation) {
      const phase = getMoonPhase({ year, month, day });
      setMoonPhaseName(phase.name);
      setMoonPhasePercent(phase.percent);
    }

    calculateMoonPhase({ year, month, day });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { moonPhasePercent, moonPhaseName };
}

export default useMoonPhase;
