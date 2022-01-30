export interface IMapProps {
  data: any;
  defaultMapStyle?: MapStyle;
  selectedTrip?: number;
}

export interface IProperties {
  ID: number;
  NAME_EN: string;
  NAME_JP: string;
  ADDRESS: string;
  CATEGORY: string;
  FROM_DATE: Date;
  END_DATE: Date;
}

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IData {
  type: string;
  properties: IProperties;
  geometry: IGeometry;
}

export enum MapStyle {
  Japan = "mapbox://styles/ashishshetty004/ckyyekbdf001q15mxf3a8v514"
}
