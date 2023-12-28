export const at = (h, m) => {
	const d = new Date();

	d.setHours(h);
	d.setMinutes(m);
	d.setSeconds(0);
	d.setMilliseconds(0);

	return d;
};
