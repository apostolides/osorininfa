for FILE in *".ogg"; do 
	echo $FILE;
	TMP_NAME=$FILE".tmp";
	cp "$FILE" "$TMP_NAME"
	TITLE=$(basename "$FILE" ".ogg")
	ffmpeg -y -i "$TMP_NAME" -metadata title="$TITLE" "$FILE";
	rm "$TMP_NAME"
done
