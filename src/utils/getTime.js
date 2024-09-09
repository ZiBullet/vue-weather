export function getTime(dt) {
    const seconds = dt * 1000;
    const date = new Date(seconds);
    let result = {
        day: date.toLocaleString('ru-RU', {day: 'numeric'}),
        month: date.toLocaleString('ru-RU', {month: 'long'}),
        weekday: date.toLocaleString('ru-RU', {weekday: 'short'}),
    }

    return result
}