# Infrastructure

## Development Operations (devops)

* You've mentioned Google Cloud. Can we use Google Cloud's services?
* If there's some other method of hosting which, and how would that work for us? This one has a long list of follow-up questions that we can answer later, a general idea would be great if there's something more complicated in place than: we use what we need from Google Cloud.

Sidenote: We have devops knowledge. It would be great if the extent of Ritual's involvement in hosting was to provide wide (limitation-wise) but isolated Google Cloud access with some reasonable budget.

## CI / CD

* Does rituals' hosting environment have any CI / CD integration already set up?
* If so, would you prefer we use it?

## Domains

* Most likely going to look like: rituals.world/giftcard

## Integration with third party services

* Adyen for payment
  * Support different currencies for different locales
* Intersolve for giftcard code gen
  * Will Rituals put any kind of text or content on the card where Intersolve does not handle localization? Think, currency of the amount or a friendly message.
* Any other system that needs integration?

# Dev requirements

## i18n

* starting with EN / NL
* No RTL languages in future

## Accessibility?

* Not sure if we have any checks here, most likely just basic support as usual

## Styleguide

* There's a styleguide available from Rituals
  * Comes with a JS bundle that does dom manipulation

## Stack

* Depends a bit on the above. If we use the styleguide (inc js bundle) we may want to use a very basic setup, just plain old js dom manipulation?

# Success indicators

\*
