import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export function renderWithRouter(component: ReactNode) {
    return render(<BrowserRouter >{component}</BrowserRouter>)
}

let locationBackup: Location | null = null;

export function mockNavigation() {
    if (locationBackup == null) {
        locationBackup = globalThis.window.location;
    }
    let url = new URL("https://localhost/");
    globalThis.window.location = newLocation(url);
}

function newLocation(url: URL): Location{
    return encapsulateHrefSetter(createLocationObjectFromUrl(url));
}

function encapsulateHrefSetter(location: Location): Location {
    const val = location.href;
    Object.defineProperty(location, "href", {
        set: (newValue: string) => {
            location.assign(newValue);
        },
        get: () => val,
        configurable: true,
        enumerable: false
    });
    return location;
}

function createLocationObjectFromUrl(url: URL): Location {
    return {
        href: url.href,
        host: url.host,
        hostname: url.hostname,
        pathname: url.pathname,
        port: url.port,
        protocol: url.protocol,
        search: url.search,
        toString: url.toString,
        "assign": (val: string) => {
            if (!val.match(/^http(s)?:\/\/.+/)) {
                val = globalThis.window.location.protocol + "//" + globalThis.window.location.hostname + val;
            }
            const url = new URL(val);
            globalThis.window.location = newLocation(url);
        },
        "reload": () => {
            globalThis.window.history.pushState(null, "", url.toString())
        },
        "replace": (val: string) => {
            if (!val.match(/^http(s)?:\/\/.+/)) {
                val = globalThis.window.location.protocol + "//" + globalThis.window.location.hostname + val;
            }
            const url = new URL(val);
            globalThis.window.history.replaceState(null, "", url);
            globalThis.window.location = newLocation(url);
        }
    } as Location;
}

export function restoreMockNavigation() {
    if (locationBackup != null) {
        globalThis.window.location = locationBackup;
    }
}