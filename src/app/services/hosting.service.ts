import { Host } from "../models/host.model";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HostingService {
    hosts: Host[] = environment.hosts;
    host: Host;
    hostSubject : BehaviorSubject<Host> = new BehaviorSubject<Host>(({} as Host));
    /**
     *
     */
    constructor() {
        this.host = this.hosts[0];
        this.hostSubject.next(this.host);
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
    getSourceBase(source: string): string {
        return `${this.host.serverUrl}/${source}/${this.host.username}/${this.host.password}`;
    }
    changeHost(hostName: string) {
        this.host = this.hosts.find(h => h.name === hostName)?? this.hosts[0];
        this.hostSubject.next(this.host);
    }
}