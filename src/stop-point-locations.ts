/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { StopPointId, StopShortName, VehicleCategory } from "./type-util";

/**
 * Information about the stop location
 * @since 2.0.0
 * @category Cat1
 */
export interface IStopPointLocation {
    /**
     * Type of vehicle
     */
    category: VehicleCategory;
    /**
     * Stop Id
     */
    id: StopPointId;
    /**
     * label
     */
    label: string;
    /**
     * Latitude in arcmiliseconds
     */
    latitude: number;
    /**
     * Longitutde in arcmiliseconds
     */
    longitude: number;
    /**
     * Humanreadable name of the stop
     */
    name: string;
    /**
     * Stop short id
     */
    shortName: StopShortName;
    /**
     * Stop point
     */
    stopPoint: string;
}

/**
 * Response for
 * ```
 * /internetservice/geoserviceDispatcher/services/stopinfo/stopPoints
 * ```
 * @since 2.0.0
 * @category Cat2
 */
export interface IStopPointLocations {
    /**
     * List of StopLocation
     */
    stopPoints: IStopPointLocation[];
}
