import React, { Component } from 'react'
import { connect } from 'react-redux'
import enLocaleData from 'react-intl/locale-data/en'
import itLocaleData from 'react-intl/locale-data/it'
import { addLocaleData, IntlProvider } from 'react-intl'
import messages from '../translation'
import { getLocale } from './store/locale/locale.selectors'
import Footer from './ui/organisms/Footer'
import { setLocale } from './store/locale/locale.actions'

const LOCALES = Object.keys(messages)

addLocaleData(enLocaleData)
addLocaleData(itLocaleData)

class LocaleProvider extends Component {
  render() {
    const { locale, setLocale } = this.props
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
          {this.props.children}
          <Footer items={LOCALES} onSelect={setLocale} />
        </div>
      </IntlProvider>
    )
  }
}

const mapStateToProps = state => ({
  locale: getLocale(state)
})

const mapDispatchToProps = (dispatch) => ({
  setLocale: locale => dispatch(setLocale(locale))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleProvider)