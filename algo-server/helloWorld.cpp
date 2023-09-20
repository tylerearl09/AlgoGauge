#include <iostream>
#include <argparse/argparse.hpp>

using namespace std;

int main(int argc, char *argv[]) {

  argparse::ArgumentParser program("program_name");

  program.add_argument("--firstWord");
  program.add_argument("--secWord");

  try {
    program.parse_args(argc, argv);
  }
  catch (const std::runtime_error& err) {
    std::cerr << err.what() << std::endl;
    std::cerr << program;
    std::exit(1);
  }

  cout << program.get("--firstWord") << program.get("--secWord") << endl;

  return 0;
}
