import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { routePartyTracksRequest } from 'partytracks/server'

const proxy = async ({ request, context }: LoaderFunctionArgs) =>
	routePartyTracksRequest({
		appId: context.env.CALLS_APP_ID,
		token: context.env.CALLS_APP_SECRET,
		request,
	})

export const loader = proxy
export const action = proxy
