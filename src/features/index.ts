export const defaultStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  backgroundColor: "#f4f4f4",
  padding: "10px",
  borderRadius: "5px",
  display: "inline-block",
};

const checkPlural = (number: number | string, text: string) => {
  const isPlural = Number(number) > 1 ? "s" : "";

  return `${number} ${text}${isPlural}`;
};

export const formatTime = (seconds: number, format: string) => {
  const sec = String(seconds % 60).padStart(2, "0"); // Get remaining seconds (formatted)
  const totalMinutes = Math.floor(seconds / 60);
  const min = String(totalMinutes % 60).padStart(2, "0"); // Get remaining minutes (formatted)
  const totalHours = Math.floor(totalMinutes / 60);
  const hrs = String(totalHours % 24).padStart(2, "0"); // Get remaining hours after extracting days
  const days = Math.floor(totalHours / 24); // Calculate days

  switch (format) {
    case "ddd hh:mm:ss":
      return `${checkPlural(days, "day")} ${checkPlural(
        hrs,
        "hour"
      )} ${checkPlural(min, "min")} ${checkPlural(sec, "sec")}`;
    case "hh:mm:ss":
      return `${String(totalHours).padStart(2, "0")}:${min}:${sec}`;
    case "hhh:mm:ss":
      return `${checkPlural(totalHours, "hour")} ${checkPlural(
        min,
        "min"
      )} ${checkPlural(sec, "sec")}`;
    case "dd:hh:mm:ss":
      return `${String(days).padStart(2, "0")}:${hrs}:${min}:${sec}`;
    case "mm:ss":
      return `${String(totalMinutes).padStart(2, "0")}:${sec}`;
    case "mmm:ss":
      return `${checkPlural(totalMinutes, "min")} ${checkPlural(sec, "sec")}`;
    case "ddd hh:mm":
      return `${checkPlural(days, "day")} ${checkPlural(
        hrs,
        "hour"
      )} ${checkPlural(min, "min")}`;
    case "ddd hh:mm:ss":
      return `${days} ${days === 1 ? "day" : "days"} ${checkPlural(
        hrs,
        "hour"
      )} ${checkPlural(min, "min")} ${checkPlural(sec, "sec")}`;
    default:
      return `${days > 0 ? `${checkPlural(days, "day")} ` : ""}${checkPlural(
        hrs,
        "hour"
      )} ${min} minutes ${checkPlural(sec, "second")}`;
  }
};
