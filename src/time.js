const pad0 = n => n < 10 ? "0" + n : n;

export class Time {
	constructor(h, m, duration = 30) {
		this.h = h;
		this.m = m;
		this.duration = duration;
	}

	static at(h, m) {
		return new Time(h, m);
	}

	overlaps(other) {
		const thisStart = this.h * 60 + this.m;
		const otherStart = other.h * 60 + other.m;

		const thisEnd = thisStart + this.duration - 1;
		const otherEnd = otherStart + other.duration - 1;

		return thisStart <= otherStart && otherStart < thisEnd
			|| thisStart <= otherEnd && otherEnd < thisEnd;
	}

	format() {
		return `${pad0(this.h)}:${pad0(this.m)}`;
	}
}
