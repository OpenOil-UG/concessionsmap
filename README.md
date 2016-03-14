
# Preparing a release

New data files go in concessions/data
Filenames should be ISO 2-letter country codes.
For areas which are not recognized countries (such as joint development zones), choose a three-letter code.

Be sure to add any new files to the repo:

'''
git add concessions/data/*geojson
'''

When all the data is in place, run Make in the top directory

'''
git push origin staging
'''
