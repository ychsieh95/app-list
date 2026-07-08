import { useLocale } from '../i18n/LocaleContext'

const REPO_URL = 'https://github.com/ychsieh95/app-list'

export function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        {t('footerCopyright').replace('{year}', String(year))}
      </p>
      <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
        {t('footerSource')}
      </a>
    </footer>
  )
}
