<template>
  <modal-view
    title="Invest MCX"
    has-close-button
    @on-dismiss="navigation.goBack()"
    scrollable
  >
    <header-view
      title="Invest MCX"
      subtitle="With MultiCash you can easily put your MCX in a savings account and you will receive 2.5% interest."
      :image="require('@/assets/duration-finance.png')"
    />

    <selector
      name="Account"
      value="Swen"
    />

    <action-notification
      title="Annualized Interest Rate"
      label="34.94 %"
    >
      <rounded-button title="15 Days" />
    </action-notification>
  </modal-view>
</template>

<script>
export default {
  name: 'OverviewView',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {}
}
</script>
