import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CataloguesService {
  // url = "https://dev-api-content.azurewebsites.net/api/v01";
  url = "https://bff-web.iwant.ph/api";
  urlBlob = "https://content-micro-all.azureedge.net";
  urlProfile = "https://dev-api-userprofilemanagment.azurewebsites.net/api/v01";
  siteCode = "OTT";
  countryCode = "PH";
  device = ""; // **will not work when applying 'web'
  localStorage: any;
  constructor(private http: HttpClient) {
    this.localStorage = localStorage;
  }

  getWorld(count, code) {
    if (code === undefined) {
      code = "";
    }
    return this.http.get(
      `${this.url}/OneCms/cmsapi/OTT/GetWorldByLimit?siteCode=${this.siteCode}&size=2&page=${count}&countryCode=${this.countryCode}&pageCode=${code}`
    );
  }
}
