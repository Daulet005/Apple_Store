import React, { useState } from 'react';
import './ContactPage.css'; // Убедитесь, что этот файл существует и содержит ваши стили

function RepairServicePage() {
    const [serialNumber, setSerialNumber] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    // Маппинг кодов регионов
    const regionCodes = {
        'A': 'Kanada',
        'AB': 'Ob Arabia',
        'AE': 'Saud Arabia',
        'AF': 'Alzhir',
        'AH': 'Kuveit, Bahrein',
        'B': 'Great Britain',
        'BT': 'Great Britain',
        'LA': 'Europe',
        'CH': 'KNR',
        'J': 'Japan',
        'JP': 'Japan',
        'RP': 'Russian',
        'RS': 'Russian',
        'RU': 'Russian',
        'RR': 'Russian, Moldova',
        'RM': 'Russian, Kazakhstan',
        'TH': 'Tailand',
        'UQ': 'North America',
        'OZ': 'Australia',
        'RK': 'Kazakhstan'
    };

    // Маппинг моделей устройств
    const modelMapping = {
        'A2111': 'iPhone 11',
        'A2221': 'iPhone 11 Pro',
        'A2160': 'iPhone 11 Pro Max',
        'A2342': 'iPhone 12',
        'A2176': 'iPhone 12 mini',
        'A2407': 'iPhone 12 Pro',
        'A2341': 'iPhone 12 Pro Max',
        'A2628': 'iPhone 13',
        'A2631': 'iPhone 13 mini',
        'A2482': 'iPhone 13 Pro',
        'A2636': 'iPhone 13 Pro Max',
        'A2643': 'iPhone 14',
        'A2649': 'iPhone 14 Plus',
        'A2890': 'iPhone 14 Pro',
        'A2891': 'iPhone 14 Pro Max',
        // Добавьте другие модели, если нужно
    };

    const handleCheckSerialNumber = () => {
        // Проверяем, что серийный номер не пустой и имеет правильную длину
        if (serialNumber.length < 3) { // Длина должна быть не менее 3 символов для учета первой буквы и кода региона
            setStatusMessage('Введите полный серийный номер.');
            return;
        }

        // Первая буква и оставшаяся часть номера
        const firstLetter = serialNumber[0];
        const restOfNumber = serialNumber.slice(1);

        // Определяем тип устройства по первой букве
        let deviceType = '';
        switch (firstLetter) {
            case 'M':
                deviceType = 'оригинальный, полностью новый';
                break;
            case 'P':
                deviceType = 'персонализированный аппарат с гравировкой';
                break;
            case 'F':
                deviceType = 'восстановленный по программе Apple Certified Refurbished';
                break;
            case 'N':
                deviceType = 'обменный смартфон';
                break;
            default:
                deviceType = 'неизвестный тип устройства';
        }

        // Поиск кода региона в оставшейся части номера
        let foundRegion = 'неизвестный регион';
        for (let code in regionCodes) {
            if (restOfNumber.includes(code)) {
                foundRegion = regionCodes[code];
                break;
            }
        }

        // Поиск модели устройства
        let foundModel = 'неизвестная модель';
        for (let model in modelMapping) {
            if (restOfNumber.startsWith(model)) {
                foundModel = modelMapping[model];
                break;
            }
        }

        // Формируем сообщение о статусе
        const statusText = `Ваш телефон ${deviceType}. Модель: ${foundModel}. Регион: ${foundRegion}.`;
        setStatusMessage(statusText);
    };

    return (
        <div className="repair-service-page">
            <h2>Проверка Подлинности Устройства</h2>

            <div className="serial-check-section">
                <label htmlFor="serial-number">Введите серийный номер устройства:</label>
                <input
                    type="text"
                    id="serial-number"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    placeholder="Серийный номер устройства"
                />
                <br />
                <br />
                <button onClick={handleCheckSerialNumber}>Проверить</button>
            </div>

            {statusMessage && (
                <div className="status-message">
                    <p>{statusMessage}</p>
                </div>
            )}
        </div>
    );
}

export default RepairServicePage;
