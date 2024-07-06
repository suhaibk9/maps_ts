export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color?: string;
}
export class CustomMap {
  private googleMap;
  constructor(id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: 10,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker(obj: Mappable): void {
    let marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: obj.location.lat,
        lng: obj.location.lng,
      },
    });
    let infoWindowContent = obj.markerContent();
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });
    marker.addListener('mouseover', () => {
      infoWindow.open(this.googleMap, marker);
    });
    marker.addListener('mouseout', () => {
      infoWindow.close();
    });
  }
}
