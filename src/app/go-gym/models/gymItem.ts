export interface GymItem {
    gymItemId?:       number;
    name?:            string;
    description?:     string;
    isRequired?:      boolean;
    userId?:          string;
    user?:            null;
    dateTimeCreated?: Date;
    lastUpdated?:     Date;
}
