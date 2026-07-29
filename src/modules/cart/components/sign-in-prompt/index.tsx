import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-slate-950 border border-slate-800 p-5 rounded-lg flex items-center justify-between text-slate-100">
      <div>
        <Heading level="h2" className="text-white font-mono font-bold text-base uppercase tracking-wider">
          // Already have an account?
        </Heading>
        <Text className="text-slate-400 text-xs mt-1 font-sans">
          Sign in for saved shipping addresses and faster checkout.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 font-mono text-xs font-semibold rounded-lg transition-colors" data-testid="sign-in-button">
            Sign in
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
