export interface ICart {
	cart: IData[];
	count: number;
	toggle: boolean;
}
export interface IEvents {
	date: string;
	events: any[];
}
export interface IVenue {
	id: string;
	name: string;
	contentUrl: string;
	live: boolean;
	direction: string;
}
interface IPick {
	id: string;
	blurb: string;
}
interface I$oid {
	$oid: string
}
interface IArtists {
	id: string,
	name: string,
	_id: I$oid
}
export interface IData {
	_id: string,
	title: string,
	flyerFront: string,
	attending: number,
	date: string,
	startTime: string,
	endTime: string,
	contentUrl: string,
	venue: IVenue;
	pick: IPick;
	artists: IArtists;
	city: string,
	country: string,
	private: boolean,
	__v: number
}

export interface EventState {
	data: IData[],
	isLoading: boolean;
	error: null | string;
}