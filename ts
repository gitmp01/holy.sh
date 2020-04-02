#!/bin/bash 

function usage() {
	echo "Usage: ts [OPTIONS] [UNIXTIMESTAMP|UTCDATE]"
	echo "Convert to and from a unix timestamp to a UTC date."
	echo ""
	echo "unix timestamp     seconds since 1970-01-01 00:00:00 UTC"
	echo "utc date           date in a year-month-day hour:mins:seconds format"
	echo ""
	echo "Examples:"
	echo "  ts 2147483647"
	echo "  ts \"2020-03-04 11:05\""  
	echo "  ts "
}

FMT="+%Y-%m-%d %H:%M:%S"

if [[ -z $1 ]]; then
	date +%s
elif [[ $1 == "-h" ]]; then
	usage
elif [[ `echo $1 | egrep -o ":|-" | tail -n 1` ]]; then
	date --date="$1" "+%s"
else
	date --date="@$1" "$FMT"
fi