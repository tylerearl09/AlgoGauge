#include <iostream>
#include <vector>
#include <fstream>
#include <cstdlib>
#include <ctime>
#include <string>

// Generate random data of the specified data type
template <typename T>
std::vector<T> generateRandomData(int count) {
    std::vector<T> data;
    for (int i = 0; i < count; i++) {
        data.push_back(static_cast<T>(rand()));
    }
    return data;
}

int main(int argc, char* argv[]) {
    // Check for the correct number of command-line arguments
    if (argc != 4) {
        std::cerr << "Usage: " << argv[0] << " <data_type> <count> <output_file>" << std::endl;
        return 1;
    }

    std::string dataType = argv[1];
    int count = std::atoi(argv[2]);
    std::string outputFileName = argv[3];

    // Seed the random number generator with the current time
    std::srand(static_cast<unsigned>(std::time(nullptr)));

    std::ofstream outputFile(outputFileName);
    if (!outputFile.is_open()) {
        std::cerr << "Error: Unable to open the output file." << std::endl;
        return 1;
    }

    if (dataType == "int") {
        std::vector<int> data = generateRandomData<int>(count);
        outputFile << "int" << std::endl;
        for (int value : data) {
            outputFile << value << std::endl;
        }
    } else if (dataType == "double") {
        std::vector<double> data = generateRandomData<double>(count);
        outputFile << "double" << std::endl;
        for (double value : data) {
            outputFile << value << std::endl;
        }
    } else if (dataType == "float") {
        std::vector<float> data = generateRandomData<float>(count);
        outputFile << "float" << std::endl;
        for (float value : data) {
            outputFile << value << std::endl;
        }
   } else {
        std::cerr << "Unsupported data type. Please use 'int', 'double', or 'float'." << std::endl;
        return 1;
    }

    outputFile.close();
    std::cout << "Random data written to " << outputFileName << std::endl;

    return 0;
}