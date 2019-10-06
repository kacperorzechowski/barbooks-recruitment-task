##Getters, actions
Since we do not need to modify items from state while we get them I decided to not use getters. In my opinion is much better to use mapState function in place where we need variable from state.

Reason why I skipped actions is similar. There is no any API calls or other asynchronous stuff going on in the background.
