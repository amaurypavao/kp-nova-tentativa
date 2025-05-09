/* Typings for `render-runtime` */
declare module 'vtex.render-runtime' {
    import { Component, ComponentType, ReactElement, ReactType } from 'react'

    export interface NavigationOptions {
        page: string
        params?: any
    }

    export interface RenderContextProps {
        runtime: {
            navigate: (options: NavigationOptions) => void
        }
    }

    interface ExtensionPointProps {
        id: string
        [key: string]: any
    }

    interface ChildBlock<BlockProps> {
        props: BlockProps
    }

    export const ExtensionPoint: ComponentType<ExtensionPointProps>
    export const useChildBlock: <BlockProps>({
        id,
    }: {
        id: string
    }) => ChildBlock<BlockProps> | null
    export const Helmet: ReactElement
    export const Link: ReactType
    export const NoSSR: ReactElement
    export const RenderContextConsumer: any
    export const TreePathContextConsumer: any
    export const useTreePath: any
    export const useRuntime: any
    export const canUseDOM: boolean
    export const withRuntimeContext: <TOriginalProps extends {}>(
        Component: ComponentType<TOriginalProps & RenderContextProps>
    ) => ComponentType<TOriginalProps>

    export const withSession: <TOriginalProps extends {}>(
        Component: ComponentType<TOriginalProps & RenderContextProps>
    ) => ComponentType<TOriginalProps>

    interface KeyValue {
        value: string
    }

    interface Session {
        id: string
        namespaces: {
            profile: {
                isAuthenticated: KeyValue
            }
        }
    }

    interface SessionUnauthorized {
        type: 'Unauthorized'
        message: string
    }

    export interface RenderSession {
        sessionPromise: Promise<SessionPromise>
    }

    export interface SessionPromise {
        response: Session | SessionUnauthorized
    }
}