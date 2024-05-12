'use client'
import {ReactNode, useEffect} from "react";
import {Provider} from "react-redux";
import {store} from "@/store/index";
import {checkAndSetAuthFromCookie} from "@/lib/helpers/cookies";
import {setToken} from "@/store/tokenSlice";

export default function StoreProvider({children}: {children: ReactNode}) {
    useEffect(() => {
        const token = checkAndSetAuthFromCookie()
        if (token) {
            store.dispatch(setToken(token))
        }
    }, [])
    return <Provider store={store}>{children}</Provider>
}