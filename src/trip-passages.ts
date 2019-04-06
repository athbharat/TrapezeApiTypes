import { VEHICLE_STATUS } from "./vehicle-status";

export interface ITripPassage {
    actualTime: string;
    status: VEHICLE_STATUS;
    stop: {
        id: string;
        name: string;
        shortName: string;
    };
    stop_seq_num: string;
}

type IDepartedTripPassage = Omit<ITripPassage, "status"> & { status: "DEPARTED" };
type IActualTripPassage = Omit<ITripPassage, "status"> & { status: string | "PREDICTED" | "DEPARTED" | "STOPPING" };

export interface ITripPassages {
    actual: IActualTripPassage[];
    old: IDepartedTripPassage[];
    directionText: string;
    routeName: string;
}
