AUTHOR = 'Martial'
SITENAME = 'Nectar Journal'
SITEURL = ''
# place at root with filename favicon.ico the images/favicon-256x256.png file
EXTRA_PATH_METADATA = {
    'images/favicon.png': {'path': 'favicon.ico'},
    'images/logo.svg': {'path': 'logo.svg'}
}

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'fr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Pelican', 'https://getpelican.com/'),
#          ('Python.org', 'https://www.python.org/'),
#          ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
#          ('You can modify those links in your config file', '#'),)

DEFAULT_PAGINATION = 5

THEME = "theme/mysimple"

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
