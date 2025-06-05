import { useState } from 'react';

export const RoundedCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex items-center">
            {/* Скрытый нативный чекбокс */}
            <input
                type="checkbox"
                id="custom-checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="sr-only" // делает чекбокс невидимым, но доступным для формы/скринридеров
            />

            {/* Кастомный круглый чекбокс */}
            <label
                htmlFor="custom-checkbox"
                className={`
          flex items-center justify-center w-5 h-5  rounded-full border-2 cursor-pointer
          ${isChecked
                        ? 'bg-[#C084FC] '
                        : 'border-gray-400 bg-white'
                    }
          transition duration-200
        `}
            >
                {/* Иконка галочки или что-то другое при checked */}
                {/* {isChecked && (
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                )} */}
            </label>

            <span className="ml-2 text-sm text-gray-700">Круглый чекбокс</span>
        </div>
    );
}