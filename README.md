# Shortcut.Codes 

This is a simple service that makes it easy to download and run commands. Create a repository called `shortcut.codes` and check in your scripts. Use this to run simple tasks without needing a full automation solution. Use it to set up a new Windows workstation: `curl https://shortcut.codes/willfong/windows | cmd`

For Windows, you probably will want to run as Administrator.


### Why

Everything should be automated. We should be "keeping notes" in automation scripts so we don't have to spend time running the same commands over and over again. Our workstation operation systems should be designed to be command line interface (CLI) friendly


### How it works

`https://shortcut.codes/{GitHub Username}/{Filename}`

The service will fetch the following URL:
`https://raw.githubusercontent.com/{GitHub Username}/shortcut.codes/master/{Filename}`


### Examples

Verify the script:
```
wget -O- https://shortcut.codes/willfong/echo
```

Execute:
```
wget -O- https://shortcut.codes/willfong/echo | sh
```

This works on Windows too:
```
curl https://shortcut.codes/willfong/echo | cmd
```
