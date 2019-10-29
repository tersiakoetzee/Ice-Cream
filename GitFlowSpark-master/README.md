# GitFlowPractise

A text-file based thing for practising Git Flow workflow. Follow the [git flow model](http://nvie.com/posts/a-successful-git-branching-model/) and take one feature per person. Don't worry about Hotfix branches for now: just concentrate on using `master`, `develop`, and `feature` branches, and use `git tag` for a release.

Read the [how to](./howto.md) section before you start.

To get your code into our text application thing:

* Push your feature branch to GitHub.
* Make a Pull Request on GitHub for merging your feature branch into develop.
* Ask someone to review your Pull Request, and give you a :+1: in a comment when they are happy.
* Merge the Pull Request on GitHub.

Get started by doing a `git clone` on this repo.

## Feature list: part 1

1. Add an answer to the question in `file1.md`.
* Add an answer to the question in `file2.md`.
* Add an answer to the question in `file3.md`.
* Add an answer to the question in `file4.md`.
* Add an answer to the question in `file5.md`.
* Add `file6.md` with a question in it.
* Add `file7.md` with a question in it.
* Add `file8.md` with a question in it.
* Add `file9.md` with a question in it.
* Add `file10.md` with a question in it.
* Add an answer to the question in `file6.md`.
* Add an answer to the question in `file7.md`.
* Add an answer to the question in `file8.md`.
* Add an answer to the question in `file9.md`.
* Add an answer to the question in `file10.md`.

## Release

Once all the features have been finished, one person should make a release by merging `develop` into `master`. All team members should get the latest copy of the `master` branch.

## Feature list: part 2

1. Add another question to `file1.md`
* Add another question to `file2.md`
* Add another question to `file3.md`
* Add another question to `file4.md`
* Add another question to `file5.md`
* Add an answer to the second question on `file 1.`md
* Add an answer to the second question on `file 2.`md
* Add an answer to the second question on `file 3.`md
* Add an answer to the second question on `file 4.`md
* Add an answer to the second question on `file 5.`md
* Add another question to `file6.md`
* Add another question to `file7.md`
* Add another question to `file8.md`
* Add another question to `file9.md`
* Add another question to `file10.md`
* Add an answer to the second question on `file 6.`md
* Add an answer to the second question on `file 7.`md
* Add an answer to the second question on `file 8.`md
* Add an answer to the second question on `file 9.`md
* Add an answer to the second question on `file 10.`md

## Release

Once all the features have been finished, one person should make a release by merging `develop` into `master`. All team members should get the latest copy of the `master` branch.


## Discussion topics

* Why use `develop` as the main branch instead of `master`?
* What state should `master` be in, in terms of tests?
* What happened when you pushed and pulled `develop`?
* What branches are allowed to merge into and out of `develop` and `master`?
* What does `git tag` do and why is it useful?
