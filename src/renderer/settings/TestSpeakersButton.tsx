import React, { useState } from 'react';
// @ts-ignore
import chime from '../../../static/chime.mp3';
import { ExtendedAudioElement } from '../Voice';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface TestSpeakersProps {
	speaker: string;
}

const useStyles = makeStyles(() => ({
	button: {
		width: 'fit-content',
		margin: '5px auto',
	},
}));

const audio = new Audio() as ExtendedAudioElement;
audio.src = chime;

const TestSpeakersButton: React.FC<TestSpeakersProps> = ({
	speaker,
}: TestSpeakersProps) => {
	const classes = useStyles();
	const [playing, setPlaying] = useState(false);
	if (speaker.toLowerCase() !== 'default') audio.setSinkId(speaker);

	const testSpeakers = () => {
		if (playing) {
			audio.pause();
			audio.currentTime = 0;
			setPlaying(false);
		} else {
			audio.play();
			setPlaying(true);
		}
	};

	return (
		<Button
			variant="contained"
			color="secondary"
			size="small"
			className={classes.button}
			onClick={testSpeakers}
		>
			{playing ? 'Stop Test Speaker' : 'Test speaker'}
		</Button>
	);
};

export default TestSpeakersButton;