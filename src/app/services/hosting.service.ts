import { Injectable } from "@angular/core";
import { Host } from "../models/host.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HostingService {
    hosts: Host[] = environment.hosts;
    host: Host;
    /**
     *
     */
    constructor() {
        this.host = this.hosts[0];
    }
    buildUrl(service: string) {
        return `${this.host.serverUrl}/${service}?username=${this.host.username}&password=${this.host.password}`;
    }
    getStreamSourceBase(): string {
        return `${this.host.serverUrl}/${this.host.username}/${this.host.password}`;
    }
    getStreamSource(streamId: number): string {
        return `${this.host.serverUrl}/${this.host.username}/${this.host.password}/${streamId}`;
    }
    getSourceBase(source : string): string {
        return `${this.host.serverUrl}/${source}/${this.host.username}/${this.host.password}`;
      }
}