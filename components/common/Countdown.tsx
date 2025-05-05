"use client";

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  expiryTime: string; // ISO string date
  onExpire?: () => void;
}

const Countdown = ({ expiryTime, onExpire }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = new Date(expiryTime).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      if (onExpire) onExpire();
      return { minutes: 0, seconds: 0 };
    }
    
    return {
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryTime]);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="flex items-center">
      <Clock className="mr-2 h-4 w-4 text-primary" />
      <div className="flex items-center text-white">
        <span className="text-xl font-mono">
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};

export default Countdown;